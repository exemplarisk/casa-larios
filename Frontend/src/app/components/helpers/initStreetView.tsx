export const initStreetView = (url: string) => {
    console.log(url)
    return (
        <div id="streetdiv">
            <div id="position" style={{ border: 0, marginBottom: "8px", marginTop: "8px", height: "300px" }} >
                <iframe style={{ width: "100%" }} src={url}
                    width="600"
                    height="550"
                    aria-hidden="false"
                    allowFullScreen
                    loading="lazy">
                </iframe>
            </div>
        </div>
    )
}
export default initStreetView 
