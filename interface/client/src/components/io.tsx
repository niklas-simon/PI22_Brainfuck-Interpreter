import { Button, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function IO() {
    const [output, setOutput] = useState("");
    const [input, setInput] = useState("");

    return <div className="flex flex-col gap-4">
        <Textarea readOnly label="Output" radius="none"
            className="font-mono" value={output} 
            placeholder="Output from the machine will be displayed here"/>
        <Textarea radius="none" label="Input"
            placeholder="Input for the machine goes here" 
            className="font-mono"
            value={input} onChange={e => setInput(e.target.value)}/>
        <div className="flex flex-row gap-4 items-center">
            <Button variant="light" color="primary" className="w-min" onClick={() => {
                setOutput(output + input + "\n");
                setInput("");
            }}>Send</Button><Button variant="light" color="danger" className="w-min" onClick={() => {
                setOutput("");
                setInput("");
            }}>Clear</Button>
        </div>
    </div>
}