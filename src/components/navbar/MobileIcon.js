import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import GrainIcon from "@mui/icons-material/Grain";

export default function MobileIcon({ icon, open }) {
  return (
    <div id="icon" onClick={icon} className="nav-icon-m">
      {open ? (
        <ScatterPlotIcon sx={{ fontSize: 45 }} />
      ) : (
        <GrainIcon sx={{ fontSize: 45 }} />
      )}
    </div>
  );
}
