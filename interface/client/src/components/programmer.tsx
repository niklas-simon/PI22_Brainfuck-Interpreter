import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Textarea } from "@nextui-org/react";
import { useState } from "react";

const presets = [
    {
        name: "Hello World",
        program: "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."
    },
    {
        name: "Cat",
        program: ",[.,]"
    },
    {
        name: "Prime Factorization",
        program: ">,----------[-------------------------------------->++++++++++<<[->>>+<<<]>>[->[->+<<<<+>>>]>[-<+>]<<]>[-]<<[-<+>],----------]+<-[+>+<[->>+>+<<<]>>>[-<<<+>>>]>+[[-<+<-<-[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[<+>[-]]<[->+>+<<]>>[-<<+>>]<[[-]<-<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<+>[-]]]<]<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<+>[-]]<[->+>+<<]>>[-<<+>>]<[<<[-<<+>>]>>[-]]<]+<<<[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[<->[-]]<<[-<<+>>]>[-<+>]<[-<<<[>>+<[-<->>>+<<]>>[-<<+>>]<<<]>>[-<<+>>]<[->+>+<<]>>[-<<+>>]+[>++++++++++[<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<<<->>>[-]]<-]>>>+<<<<-]>>>>[-<<<<+>>>>]<<<<<[[-]>[->++++++++++<]>[-<+>]<<<[->+>>+<<<]>>>[-<<<+>>>]<[>++++++++++[<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<<<->>>[-]]<-]>>>+<<<<-]>>>>[-<<<<+>>>>]<<<<<]<[->+>>+<<<]>>>[-<<<+>>>]<-[+>>>+[[-<<+<-<->[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[<+>[-]]<[->+>+<<]>>[-<<+>>]<[[-]<-<<<<[->>>>>+>+<<<<<<]>>>>>>[-<<<<<<+>>>>>>]<[<+>[-]]]<]+<<<[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[[-]<->]<[->+>+<<]>>[-<<+>>]<[[-]<<+<[-<+>]>>>]<]<++++++++++++++++++++++++++++++++++++++++++++++++.[-]<[-<+<+>>]<[---------->+<]>[-<+>]<-]<++++++++++++++++++++++++++++++++++++++++++++++++.[-]++++++++++.[-]<<[->>+>+<<<]>>>[-<<<+>>>]>+[[-<+<-<-[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[<+>[-]]<[->+>+<<]>>[-<<+>>]<[[-]<-<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<+>[-]]]<]<<[->>>+>+<<<<]>>>>[-<<<<+>>>>]<[<+>[-]]<[->+>+<<]>>[-<<+>>]<[<<[-<<+>>]>>[-]]<]+<<<[->>>>+>+<<<<<]>>>>>[-<<<<<+>>>>>]<[<->[-]]<<[-<<+>>]>[-<+>]<]<<<-]"
    }
]

export default function Programmer() {
    const [program, setProgram] = useState("");

    return <div className="flex flex-col gap-4">
        <Textarea label="Program" placeholder=",[.,]" radius="none" className="font-mono"
            value={program} onChange={e => setProgram(e.target.value)}/>
        <div className="flex flex-row gap-4">
            <Button color="primary" variant="light" className="w-min">Write</Button>
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="light" color="secondary">
                        Preset
                    </Button>
                </DropdownTrigger>
                <DropdownMenu onAction={key => setProgram(presets[key as number].program)}>
                    {presets.map((p, i) => <DropdownItem key={i}>
                        {p.name}
                    </DropdownItem>)}
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
}