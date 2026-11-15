from __future__ import annotations
import numpy as np
from tasks.earth_001_bd_crs_area.solution import solve as reference_solve

def verify(candidate: dict) -> dict:
    ref = reference_solve()
    if candidate.get("target_crs") != "EPSG:32646":
        return {"passed": False, "failure_mode": "wrong_crs_projection", "explanation": "Must reproject to EPSG:32646."}
    if candidate.get("repair_method") != "make_valid":
        return {"passed": False, "failure_mode": "unsafe_topology_repair", "explanation": "Must use make_valid instead of buffer(0)."}
    if not candidate.get("post_repair_valid_all", False):
        return {"passed": False, "failure_mode": "invalid_geometry_remaining", "explanation": "Invalid geometries remain."}
    cand_area = float(candidate.get("total_area_sq_km", -1.0))
    if not np.isclose(cand_area, ref["total_area_sq_km"], rtol=1e-3, atol=1e-2):
        return {"passed": False, "failure_mode": "area_calculation_mismatch", "explanation": "Area mismatch."}
    return {"passed": True, "failure_mode": "none", "explanation": "All checks passed."}
