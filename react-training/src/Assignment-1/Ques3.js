// 3.Create a functional component named Weather that accepts a prop called temperature (a number).
// // Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.


const Wheather=(props)=>{
    return(
    <div>
        {
        props.temp >=25 ?<div>"It's sunny today"</div> :props.temp<=10? <div>"It's cold today!"</div> : <div>"Neither hot nor cold"</div>
        }
    </div>
    )
}
export default Wheather;