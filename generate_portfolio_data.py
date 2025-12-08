import os
import json
import subprocess
from pathlib import Path

# Configuration
PROJECTS_DIR = Path("Projects")
OUTPUT_HTML_DIR = Path("portfolio-site/public/projects")
OUTPUT_DATA_DIR = Path("portfolio-site/src/data")
OUTPUT_JSON_FILE = OUTPUT_DATA_DIR / "projects.json"

def convert_notebooks():
    """
    Scans PROJECTS_DIR for .ipynb files, converts them to HTML,
    and generates a projects.json metadata file.
    """
    if not PROJECTS_DIR.exists():
        print(f"Error: Projects directory '{PROJECTS_DIR}' not found.")
        return

    # Ensure output directories exist
    OUTPUT_HTML_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_DATA_DIR.mkdir(parents=True, exist_ok=True)

    projects_metadata = []

    # old or unfinished projects to skip
    notebook_blacklist = {
        "Clean and Analyze Employee Exit Surveys - Draft.ipynb",
        "Creating a Kaggle Workflow.ipynb",
        "Predicting House Sale Prices.ipynb",
        "Analyzing CIA Factbook Data Using SQL.ipynb",
        "Answering Business Questions Using SQL.ipynb"
    }
    
    # Walk through the projects directory
    for root, dirs, files in os.walk(PROJECTS_DIR):
        for file in files:
            if file.endswith(".ipynb") and not ".ipynb_checkpoints" in root:
                # Skip blacklisted notebooks
                if file in notebook_blacklist:
                    continue

                notebook_path = Path(root) / file
                
                # Determine project name from the parent directory name
                project_name = notebook_path.parent.name
                
                # Create a safe filename for the HTML output using the notebook name to avoid collisions
                safe_project_name = project_name.lower().replace(" ", "_").replace("-", "_")
                safe_notebook_name = notebook_path.stem.lower().replace(" ", "_").replace("-", "_")
                html_filename = f"{safe_project_name}_{safe_notebook_name}.html"
                
                # Use absolute path for output to avoid nbconvert relative path issues
                output_html_path = (OUTPUT_HTML_DIR / html_filename).resolve()
                
                print(f"Converting {notebook_path} to {output_html_path}...")
                
                # Run jupyter nbconvert
                # We use the venv jupyter if available, otherwise system jupyter
                # Added --no-prompt to remove input prompts from the output HTML
                jupyter_cmd = ["./venv/bin/jupyter", "nbconvert", "--to", "html", "--no-prompt", str(notebook_path), "--output", str(output_html_path)]
                
                # Fallback to system jupyter if venv one doesn't exist (or we are not in root)
                if not Path("./venv/bin/jupyter").exists():
                     jupyter_cmd = ["jupyter", "nbconvert", "--to", "html", "--no-prompt", str(notebook_path), "--output", str(output_html_path)]

                try:
                    subprocess.run(jupyter_cmd, check=True, capture_output=True)
                    
                    # Determine title based on project and notebook name
                    title = project_name
                    
                    # Special handling for Lending Club Predictions
                    if "Lending Club Predictions" in project_name:
                        if "model_training" in notebook_path.name:
                            title = "Lending Club Predictions - model training"
                        elif "feature_prep" in notebook_path.name:
                            title = "Lending Club Predictions - feature prep"
                        elif "Data_Cleaning" in notebook_path.name:
                            title = "Lending Club Predictions - Cleaning"
                    
                    # Add to metadata
                    projects_metadata.append({
                        "id": f"{safe_project_name}_{safe_notebook_name}",
                        "title": title,
                        "description": "", # Empty description as requested
                        "htmlFile": f"/projects/{html_filename}",
                        "originalFile": str(notebook_path)
                    })
                    print(f"Successfully converted {project_name}")
                    
                except subprocess.CalledProcessError as e:
                    print(f"Failed to convert {notebook_path}: {e}")
                    print(e.stderr.decode())

    # Write metadata to JSON
    with open(OUTPUT_JSON_FILE, "w") as f:
        json.dump(projects_metadata, f, indent=2)
    
    print(f"Done! Generated metadata for {len(projects_metadata)} projects at {OUTPUT_JSON_FILE}")

if __name__ == "__main__":
    convert_notebooks()
