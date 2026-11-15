from __future__ import annotations
import importlib.util
from pathlib import Path
import pytest

TASKS_DIR = Path(__file__).resolve().parents[1] / "tasks"

def load_module(path: Path, name: str):
    spec = importlib.util.spec_from_file_location(name, path)
    assert spec is not None and spec.loader is not None
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod

def get_task_dirs():
    return [p for p in sorted(TASKS_DIR.iterdir()) if p.is_dir() and (p / "verifier.py").exists()]

@pytest.mark.parametrize("task_dir", get_task_dirs(), ids=lambda p: p.name)
def test_reference_solution_passes(task_dir: Path):
    sol_mod = load_module(task_dir / "solution.py", f"{task_dir.name}_sol")
    ver_mod = load_module(task_dir / "verifier.py", f"{task_dir.name}_ver")
    verdict = ver_mod.verify(sol_mod.solve())
    assert verdict["passed"] is True

@pytest.mark.parametrize("task_dir", get_task_dirs(), ids=lambda p: p.name)
def test_deliberate_buggy_solution_fails(task_dir: Path):
    bug_mod = load_module(task_dir / "buggy_solution.py", f"{task_dir.name}_bug")
    ver_mod = load_module(task_dir / "verifier.py", f"{task_dir.name}_ver")
    verdict = ver_mod.verify(bug_mod.solve())
    assert verdict["passed"] is False
