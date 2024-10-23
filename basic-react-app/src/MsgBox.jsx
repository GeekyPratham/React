function MsgBox({ name, textColor }) {
    return (
        <h2 style={{ color: textColor }}>Hello, {name}</h2>
    );
}

export default MsgBox;
