export default function Profile(){
    
    let profile ={
        name:"Marcus",
        alt:"Bilde av profil",
        bildeadresse:"data:image/jpeg;base64,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",
        width: '50%'
        
    }
    
    return <img src="data:image/jpeg;base64,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" 
    alt="bilde av profil"
    width={profile.width}/>
    
    
}