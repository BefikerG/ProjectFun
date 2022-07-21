class Members{
    constructor(firstName='CO',lastName = 'BRUH', nickName = 'CB',img = ''){
        this.firstName = firstName
        this.lastName = lastName
        this.nickName = nickName
        this.skills = []
        this.socialMediaLinks = []
        this.img = img
    }

    set setSkills(skill){
        
        this.skills.push(skill)

    }

    set setSocaialMediaLinks(socialMediaLink){
        this.socialMediaLinks.push(socialMediaLink)
    }

    set setImg(img){
        this.img = img
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    get getSkillsEng(){
        const skills = this.skills
        if(skills.length > 1){
            const format = `${skills.slice(0,-1)} and ${skills.slice(-1)}.`
            return format
        }else{
            return skills
        }
    }
    get getSkillsAmh(){
        let skills = this.skills
        if(skills.length > 1){
            const format = `${skills.slice(0,-1).join(' ፣ ')} እና ${skills.slice(-1)}።`
            return format
        }else{
            return skills
        }
    }

    get getSocialMediaLink(){
        return this.socialMediaLinks
    }
}


const bfg = new Members('BEFIKER','GEZAHEJ','bfg','asset/img/BFG.jpg')

bfg.setSkills = 'Web UI/UX Designer'
bfg.setSkills = 'Front-End Web Developer'
bfg.setSocaialMediaLinks = {
    github: 'https://github.com/bfg101',
    instagram: 'https://www.instagram.com/b.michael00/',
    telegram:'https://t.me/Thirstyasf',
}


const atoCM = new Members('BEAMLAK','TADESSE','አቶ CM','asset/img/Ato.jpg')
atoCM.setSkills = 'Logo Designer'
atoCM.setSkills = 'UI/UX Designer'
atoCM.setSkills = 'Front-End Web Developer'
atoCM.setSocaialMediaLinks = {
    github: 'https://github.com/beamlakTadesse01',
    instagram: 'https://www.instagram.com/mr_cm01/',
}

const coBruhs = [bfg,atoCM]
