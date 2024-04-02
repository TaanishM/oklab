function RGBextract(props) {
    const str = props.substring(props.indexOf("(") + 1,props.lastIndexOf(")"));
    const str2= str.split(" ");
    return str2;
}
export default RGBextract;