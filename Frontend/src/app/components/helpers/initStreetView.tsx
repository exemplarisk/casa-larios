export const initStreetView = (url: string) => {
    console.log(url)
    return (
        <div id="streetdiv">
            <div id="position" style={{ display: "flex", justifyContent: "center", border: 0, marginBottom: "8px", marginTop: "10vh", height: "300px" }} >
                <iframe style={{ width: "100%", }} src={url}
                    width="600"
                    height="450"
                    aria-hidden="false"
                    allowFullScreen
                    loading="lazy">
                </iframe>
            </div>
        </div>
    )
}
export default initStreetView 
