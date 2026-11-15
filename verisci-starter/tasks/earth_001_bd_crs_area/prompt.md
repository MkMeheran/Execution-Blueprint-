# Task: Subnational Boundary Topology Repair & Planar Area Calculation

Given the two-polygon Bangladesh test layer in `EPSG:4326` (where polygon `KHN_01` contains a self-intersecting bowtie ring):
1. Diagnose the count of invalid geometries (`initial_invalid_count`).
2. Repair invalid rings using `make_valid()` (do NOT use `.buffer(0)`).
3. Reproject the layer to `EPSG:32646` (WGS 84 / UTM Zone 46N) and compute total area in square kilometers (`total_area_sq_km`).
4. Return a dictionary matching the required verification keys.
