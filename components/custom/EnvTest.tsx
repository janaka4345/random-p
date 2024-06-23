export default function EnvTest() {
    const text = process.env.TEST_KEY
    console.log(text);
    return (
        <div>
            <h1><span>Test hi: </span>{text}</h1>
        </div>
    )
}