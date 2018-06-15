function closeAlert(elemId)
{
    let el = document.getElementById(elemId);
    if(el) {
        UIkit.alert(el).close();
    }
}