import { CustomPill } from "./CustomPill";
import { Framework, STATUS_INFO } from '../_interfaces/Framework';


export function FrameworkPill({ framework }: { framework: Framework }) {
    const { label, icon, colour } = STATUS_INFO[framework];
    return (
        <CustomPill label={label} icon={`<img src="${icon}" alt="${label} logo"/>`} colour={colour} emoji = {true}/>
    );
}