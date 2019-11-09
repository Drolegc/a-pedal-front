export default async function(){
    var url = 'http://localhost:8000/punto/';
    var planes = await fetch(url).then(
        (res) => res.json()
        ).then(function(res){
            return res;
        }).catch(function(error){
            console.error("Ups!");
        });

    return planes;
}