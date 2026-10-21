# Taiwan Tracker Preview

Static preview of the Taiwan Coercion Pressure Index dashboard (v4), published with GitHub Pages.

- `index.html`: the dashboard (copy of `taiwan_index_v3/output/taiwan_coercion/dashboard/v4.html` in `Sinolytics1/policy-heat-2-0`, branch `taiwan_coercion_v3`, footer links to internal files removed)
- `data.js`: index data, built by `python -m src.taiwan.dashboard` in that repository
- `scenarios.js`: forward scenarios (master: `taiwan_index_v3/scenarios/dashboard_scenarios.js`); the scenarios are illustrative drafts, not forecasts

To update: rebuild in the source repository, copy the three files here (v4.html as index.html), commit and push.
