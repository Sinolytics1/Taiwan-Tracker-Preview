// Forward scenarios for dashboard v4 (output/taiwan_coercion/dashboard/v4.html, "Scenario" dropdown).
// Master copy: scenarios/dashboard_scenarios.js; src/taiwan/dashboard.py copies it next to v4.html as scenarios.js.
// Edit the numbers here (and in the copy, or rebuild the dashboard), then refresh the page. Draft of 2026-10-21.
//
// Each scenario has 6 months, the months after the last scored month (2026-10 to 2027-03).
// Per month:
//   set:    instrument key -> share of its weight (0 to 1). Weight-independent, so the page sliders still apply.
//           Episodic rows (named_encircling_exercise, declared_closure_zones, ccg_contiguous_zone,
//           undersea_cable_interference, sanctions_arms_suppliers, diplomatic_isolation_actions): a value starts an
//           episode, which then decays x0.6 a month and drops out after two months unless set again.
//           Rows not set: episodic rows decay, all other rows keep their September 2026 state.
//   legs:   raw values for the outcome legs (C7, C8, C9), scored against the page's 0-point lines:
//             'divergence anomaly'  C7 leg 1, index points above the trailing 12-month mean (0 pts at 10.5)
//             'calls eight ports'   C7 leg 2, port calls % year on year, eight ports (0 pts at -25)
//             'calls kaohsiung'     C7 leg 2, Kaohsiung (0 pts at -20)
//             'targeted loss'       C8 leg A, % share loss on ECFA-suspended lines, net of control (0 pts at 0)
//             'broad anomaly'       C8 leg B, % vs trailing 12-month mean outside ch. 84/85/90 (0 pts at -40)
//             'magnet share'        C9, Taiwan % of China's HS 85051110 exports, 3 months (0 pts at 1.2)
//           Legs not given keep their last value.
//   events: optional dots on the index chart: { domain: 'A'-'D', row: 'A3', headline: '...' }.
// September 2026 starting points: C7 legs -6.9 / -0.9% / -8.2% (Kaohsiung, July); C8 +11.5% / -0.6%; C9 1.64%.

window.TCPI_SCENARIOS = [
  {
    id: 'blockade',
    title: 'Military and maritime blockade',
    narrative: 'A named PLA exercise rehearses a blockade, closure zones are declared off the main ports and the '
      + 'China Coast Guard starts boarding Taiwan-bound shipping; port calls fall while strait traffic holds.',
    months: [
      { // 2026-10
        set: { adiz_sustained: 1, median_line_crossings: 0.9, named_encircling_exercise: 1, declared_closure_zones: 1,
               pla_east_of_taiwan: 1, ccg_boarding_inspection: 0.5, ccg_contiguous_zone: 1 },
        legs: { 'divergence anomaly': 6, 'calls eight ports': -8, 'calls kaohsiung': -10, 'broad anomaly': -5 },
        events: [
          { domain: 'A', row: 'A3', headline: 'PLA Eastern Theater Command opens a named exercise rehearsing a blockade' },
          { domain: 'A', row: 'A4', headline: 'PLA declares closure zones off Kaohsiung, Keelung and Taichung' },
          { domain: 'B', row: 'B3', headline: 'CCG ships enter the 24 nm contiguous zone of the main island' } ] },
      { // 2026-11
        set: { adiz_sustained: 1, median_line_crossings: 1, declared_closure_zones: 1, pla_east_of_taiwan: 1,
               overflight_taiwan_proper: 0.67, ccg_boarding_inspection: 0.75, ccg_contiguous_zone: 1,
               undersea_cable_interference: 1 },
        legs: { 'divergence anomaly': 13, 'calls eight ports': -20, 'calls kaohsiung': -24, 'broad anomaly': -12 },
        events: [
          { domain: 'A', row: 'A4', headline: 'PLA renews closure zones around the main ports' },
          { domain: 'B', row: 'B2', headline: 'CCG boards and inspects cargo ships bound for Kaohsiung' },
          { domain: 'B', row: 'B6', headline: 'Undersea cable to Matsu cut after a PRC-linked vessel passes' } ] },
      { // 2026-12
        set: { adiz_sustained: 1, median_line_crossings: 1, named_encircling_exercise: 1, declared_closure_zones: 1,
               pla_east_of_taiwan: 1, ccg_boarding_inspection: 1, ccg_contiguous_zone: 1 },
        legs: { 'divergence anomaly': 20, 'calls eight ports': -30, 'calls kaohsiung': -36, 'broad anomaly': -22,
                'targeted loss': 13 },
        events: [
          { domain: 'A', row: 'A3', headline: 'PLA holds a second named exercise around Taiwan\'s ports' },
          { domain: 'B', row: 'B2', headline: 'CCG announces an inspection regime for all vessels calling at Taiwan' } ] },
      { // 2027-01
        set: { adiz_sustained: 1, median_line_crossings: 1, declared_closure_zones: 1, ccg_boarding_inspection: 1,
               ccg_contiguous_zone: 1 },
        legs: { 'divergence anomaly': 25, 'calls eight ports': -38, 'calls kaohsiung': -44, 'broad anomaly': -30,
                'targeted loss': 14 } },
      { // 2027-02
        set: { adiz_sustained: 1, median_line_crossings: 0.9, ccg_boarding_inspection: 1, ccg_contiguous_zone: 1 },
        legs: { 'divergence anomaly': 22, 'calls eight ports': -40, 'calls kaohsiung': -42, 'broad anomaly': -35,
                'targeted loss': 15 } },
      { // 2027-03
        set: { adiz_sustained: 0.75, median_line_crossings: 0.7, ccg_boarding_inspection: 1 },
        legs: { 'divergence anomaly': 16, 'calls eight ports': -35, 'calls kaohsiung': -38, 'broad anomaly': -30,
                'targeted loss': 15 } },
    ],
  },
  {
    id: 'trade',
    title: 'Trade restrictions on Taiwan',
    narrative: 'Beijing widens the ECFA suspension to the full early-harvest list, adds import bans and lists '
      + 'Taiwanese firms; Taiwan\'s share of China\'s imports falls, first on the targeted lines, then broadly.',
    months: [
      { // 2026-10
        set: { ecfa_suspension: 0.8, agri_fishery_bans: 1 },
        legs: { 'targeted loss': 14, 'broad anomaly': -8 },
        events: [
          { domain: 'C', row: 'C2', headline: 'Tariff Commission suspends ECFA concessions on another 134 items' },
          { domain: 'C', row: 'C3', headline: 'China customs suspends imports of Taiwanese fruit and aquatic products' } ] },
      { // 2026-11
        set: { targeted_measures_tw_firms: 1, sanctions_arms_suppliers: 1 },
        legs: { 'targeted loss': 18, 'broad anomaly': -18 },
        events: [
          { domain: 'C', row: 'C4', headline: 'Commerce ministry adds Taiwanese manufacturers to the export-control list' },
          { domain: 'C', row: 'C6', headline: 'Commerce ministry lists suppliers to Taiwan as unreliable entities' } ] },
      { // 2026-12
        set: { ecfa_suspension: 1 },
        legs: { 'targeted loss': 23, 'broad anomaly': -28 },
        events: [ { domain: 'C', row: 'C2', headline: 'China ends all ECFA early-harvest tariff concessions' } ] },
      { // 2027-01
        set: { sanctions_arms_suppliers: 1, diplomatic_isolation_actions: 1 },
        legs: { 'targeted loss': 27, 'broad anomaly': -40 },
        events: [ { domain: 'D', row: 'D4', headline: 'China suspends cross-strait trade dialogue channels' } ] },
      { // 2027-02
        legs: { 'targeted loss': 30, 'broad anomaly': -50 } },
      { // 2027-03
        legs: { 'targeted loss': 30, 'broad anomaly': -58 } },
    ],
  },
  {
    id: 'rare_earth',
    title: 'Rare-earth export restriction on Taiwan',
    narrative: 'Export licences for rare-earth magnets to Taiwanese buyers are delayed and then refused; Taiwanese '
      + 'firms are put on the export-control list and Taiwan\'s share of China\'s magnet exports collapses.',
    months: [
      { // 2026-10
        set: { targeted_measures_tw_firms: 0.83 },
        legs: { 'magnet share': 1.5 },
        events: [ { domain: 'C', row: 'C4', headline: 'Commerce ministry delays rare-earth export licences for Taiwanese buyers' } ] },
      { // 2026-11
        set: { targeted_measures_tw_firms: 1, sanctions_arms_suppliers: 1 },
        legs: { 'magnet share': 1.2, 'targeted loss': 12 },
        events: [
          { domain: 'C', row: 'C4', headline: 'Commerce ministry lists Taiwanese magnet users under export control' },
          { domain: 'C', row: 'C6', headline: 'Commerce ministry lists suppliers to Taiwan as unreliable entities' } ] },
      { // 2026-12
        legs: { 'magnet share': 0.9, 'targeted loss': 13, 'broad anomaly': -6 } },
      { // 2027-01
        set: { sanctions_arms_suppliers: 1 },
        legs: { 'magnet share': 0.7, 'targeted loss': 13, 'broad anomaly': -9 },
        events: [ { domain: 'C', row: 'C6', headline: 'Second round of export-control listings targets Taiwan supply chains' } ] },
      { // 2027-02
        legs: { 'magnet share': 0.5, 'broad anomaly': -12 } },
      { // 2027-03
        legs: { 'magnet share': 0.45, 'broad anomaly': -12 } },
    ],
  },
];
