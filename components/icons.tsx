import * as React from "react"
interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

export default function SvgComponent(props: SvgComponentProps): React.JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
        <g data-name="24-Html">
            <path d="M43 42H5a5.006 5.006 0 0 1-5-5V13a5.006 5.006 0 0 1 5-5v2a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h38a3 3 0 0 0 3-3V13a3 3 0 0 0-3-3V8a5.006 5.006 0 0 1 5 5v24a5.006 5.006 0 0 1-5 5zm-29 4h20v2H14z" />
            <path d="M17 41h2v6h-2zm12 0h2v6h-2zm9-7H10a3 3 0 0 1-3-3V12h2v19a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v5h28v2H8a1 1 0 0 1-1-1V3a3 3 0 0 1 3-3h28a3 3 0 0 1 3 3v28a3 3 0 0 1-3 3zM9 38H7a3 3 0 0 1-3-3v-2h2v2a1 1 0 0 0 1 1h2zm2-2h2v2h-2z" />
            <path d="M11 4h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-.707 19.707-5-5a1 1 0 0 1 0-1.414l5-5 1.414 1.414L15.414 18l4.293 4.293zm11.414 0-1.414-1.414L32.586 18l-4.293-4.293 1.414-1.414 5 5a1 1 0 0 1 0 1.414zm-8.633-1.077 3.996-10.001 1.857.742-3.996 10.001zM12 28h24v2H12z" />
        </g>
    </svg>
    );
}
