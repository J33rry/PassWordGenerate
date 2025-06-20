import { generate } from "generate-password-browser";
export function Generatepass({
    numbers,
    length,
    uppercase,
    lowercase,
    symbols,
}) {
    return generate({
        length,
        numbers,
        uppercase,
        lowercase,
        symbols,
    });
}
