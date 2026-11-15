# Rubric: earth_001_bd_crs_area
- **CRS Projection (40%)**: Must reproject to planar `EPSG:32646` before calling `.area`.
- **Topology Repair (40%)**: Must use `.make_valid()` rather than `.buffer(0)` so the bowtie polygon is preserved as a valid MultiPolygon (~57.15 sq km) rather than collapsing to 0.
- **Numeric Precision (20%)**: `total_area_sq_km` must match `171.3812` sq km within relative tolerance `1e-3`.
