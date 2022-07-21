const datas= coBruhs
const amh_letters = amhric_letters
const main = document.querySelector('main')
const to_page = document.querySelector('#to_page')

let memeber 
for(let data of datas){
    memeber = document.createElement('div')
    memeber.id = 'memeber'
    const slide = document.createElement('div')
    slide.id = 'slide'

    const intro = document.createElement('div')
    intro.className = 'intro'
    intro.id = `${data.nickName}_intro`

    //desktop_version mouse over next and previous mouse click event actions page setup
    if(window.innerWidth > 426){
        let prev_page_mouse = document.createElement('a')
        prev_page_mouse.id = 'prev_page_mouse'
        prev_page_mouse.className = 'mouse_area'

        let next_page_mouse = document.createElement('a')
        next_page_mouse.id = 'next_page_mouse'
        next_page_mouse.className = 'mouse_area'


        //if the profile div is the first it only will have a next div
        //if the profile div is the second and other profile div is at the next it will have a previous and next profile divs
        //if the profile div is the last div then it only will have previous mouse event on the previous direction
        
        if(datas.indexOf(data) == 0){
            prev_page_mouse.setAttribute('href','#home')
            next_page_mouse.setAttribute('href',`#${datas[datas.indexOf(data) + 1].nickName}_intro`)
        }else if(datas.indexOf(data) != datas.length - 1){
            prev_page_mouse.setAttribute('href',`#${datas[datas.indexOf(data) - 1].nickName}_intro`)
            next_page_mouse.setAttribute('href',`#${datas[datas.indexOf(data) + 1].nickName}_intro`)
        }else{
            prev_page_mouse.setAttribute('href',`#${datas[datas.indexOf(data) - 1].nickName}_intro`)
        }

        //here we set  the profiles which are not the last to have next click parmaeters
        //the profile wont have a next page if its the last profile
        if(datas.indexOf(data) != datas.length-1){
            intro.append(next_page_mouse)
        }
        
                

        //attributes to show on the mouse
        const next_attr = next_page_mouse.getAttribute('href')
        const prev_attr = prev_page_mouse.getAttribute('href')

        //when the mouse on the #previous div section it shows the #previous page name from the page the user is

        prev_page_mouse.onmouseover = () =>{
            const prev_attr_altered = prev_attr.replace('_intro','').slice(1).toUpperCase()
            if(prev_attr == '#home'){
                to_page.className = 'amh'
                to_page.textContent = 'መጀመሪያ ገጽ'
            }else{
                to_page.textContent = prev_attr_altered
            }
        }

        //when the mouse on the #next div section it shows the #next page name from the page the user is
        next_page_mouse.onmouseover = () =>{            
            const next_attr_altered = next_attr.replace('_intro','').slice(1).toUpperCase()
            to_page.className = 'amh'
            to_page.textContent = next_attr_altered            
        }

        intro.append(prev_page_mouse)

        //#mouseleave event for the divs code is on line 261...
        
    }

        const top = document.createElement('div')
        top.id = 'top_div'

            let i_name = document.createElement('p')
            i_name.id = 'who_we_are'

            i_name.innerHTML = `I <br> <span id='red'>AM</span> <br> ${data.nickName.toUpperCase()}`

            top.append(i_name)
    
        const center = document.createElement('div')
        center.id = 'center'

            const big_name = document.createElement('h2')

            const check = amhLetterDetctor(data.nickName)
            big_name.id = 'big_name'

            if(check){
                big_name.innerHTML = set_class_seperately(data.nickName,'amh','span')
            }else{
                big_name.textContent = data.nickName.toUpperCase()
            }

            center.append(big_name)

        const next_page = document.createElement('div')
        next_page.id = 'next_page'
            const link_to_profile = document.createElement('a')
            link_to_profile.setAttribute('href',`#${data.nickName}`)
            
            const animation_div = document.createElement('div')
            animation_div.id = 'slide_animation'
            /*
                TIll the animation div is fixed we're gonna use still image
                because on host from vscode it works but onload form file doesn't
                The following code for animation arrow from lottie

            */
           
            // lottie.loadAnimation({
           //     container: animation_div,
           //     renderer: 'svg',
           //     loop: true,
           //     autoplay: true,
           //     path: './asset/lottie/data.json'
           // })

                //reserved by steal img arrow till i fix the animation img....
                const to_profile_arrow_img = document.createElement('img')
                to_profile_arrow_img.id = 'to_profile_arrow_img_arrow'
                to_profile_arrow_img.setAttribute('src', 'asset/Scroll down animation.svg')

            animation_div.append(to_profile_arrow_img)


            link_to_profile.append(animation_div)

        next_page.append(link_to_profile)
    intro.append(top,center,next_page)

    const profile_page = document.createElement('div')
    profile_page.id = data.nickName
    profile_page.className = 'profile'
            
        const gray_top = document.createElement('div')
        gray_top.id = 'gray_top'

            const nick_name = document.createElement('h2')
            nick_name.id = 'nick_name'

            if(check){
                nick_name.innerHTML = set_class_seperately(data.nickName,'amh','span')
            }else{
                nick_name.textContent = data.nickName.toUpperCase()
            }

            const profile_image_div = document.createElement('div')
            profile_image_div.id = 'profile_image'

                const profile_image = document.createElement('img')
                profile_image.setAttribute('src',data.img)
                profile_image_div.append(profile_image)

            const who_we_are = document.createElement('p')
            who_we_are.id = 'who_we_are'
            who_we_are.className = 'who_we_are'
            who_we_are.innerHTML = `WHO <br><span id='red'>WE</span><br> ARE`

            gray_top.append(nick_name,profile_image_div,who_we_are)

        const profile_info = document.createElement('div')
        profile_info.id = 'profile_info'

            const info_wrap = document.createElement('div')
            info_wrap.id = 'info_wrap'

                const social_media_div = document.createElement('div')
                social_media_div.id = 'social_media_div'
                
                let socialMediaLink

                const socialMediaNames = data.socialMediaLinks[0]
                for(let socialMediaName in socialMediaNames){
                    socialMediaLink = document.createElement('a')
                    socialMediaLink.id = 'profile_links'
                    socialMediaLink.setAttribute('href', socialMediaNames[`${socialMediaName}`])
                        
                        let socialMediaIcon = document.createElement('i')
                        socialMediaIcon.className = `fa-brands fa-${socialMediaName} fa-lg`
                        socialMediaLink.append(socialMediaIcon)

                    social_media_div.append(socialMediaLink)
                }

                const i_memeber = document.createElement('h1')
                i_memeber.id = 'i_am'
                i_memeber.textContent = 'I AM '

                    const memeber_first_name = document.createElement('span')
                    memeber_first_name.id = 'red'
                    memeber_first_name.textContent = data.firstName.toUpperCase()

                    i_memeber.append(memeber_first_name)

                const memeber_skills = document.createElement('p')
                memeber_skills.id = 'memeber_skills'
                memeber_skills.innerHTML = amhric_words_manuplator(data.getSkillsAmh,'span','amh')

                info_wrap.append(social_media_div,i_memeber,memeber_skills)
            
            profile_info.append(info_wrap)

        const back_arrow = document.createElement('div')
        back_arrow.id = 'back_arrow'

            const back = document.createElement('a')
            back.setAttribute('href',`#${data.nickName}_intro`)

                const back_arrow_anim_div = document.createElement('div')
                back_arrow_anim_div.id = 'back_arrow_anim_div'

                /*
                TIll the animation div is fixed we're gonna use still image
                because on host from vscode it works but onload form file doesn't
                The following code for animation arrow from lottie

                */

                // lottie.loadAnimation({
                //     container: back_arrow_anim_div,
                //     renderer: 'svg',
                //     loop: true,
                //     autoplay: true,
                //     path: 'asset/lottie/data.json'
                // })

                    //reserved by steal img arrow till i fix the animation img....
                    const back_arrow_img = document.createElement('img')
                    back_arrow_img.id = 'Back_arrow_img'
                    back_arrow_img.setAttribute('src', 'asset/Scroll down animation.svg')

                    back_arrow_anim_div.append(back_arrow_img)

                    back.append(back_arrow_anim_div)

            back_arrow.append(back)

        profile_page.append(gray_top,profile_info,back_arrow)
    slide.append(intro,profile_page)
    memeber.append(slide)
    main.append(memeber)
}

//the following event changes all the red texts to blue and blue to red

// const reds = document.querySelectorAll('#red')
// document.body.ontouchstart = () =>{
//     for(let red of reds){
//         let attributs = red.getAttribute('id')
//         if(attributs == 'red'){
//             red.setAttribute('id','blue')
//             console.log('blue')
//         }else if(attributs == 'blue'){
//             red.setAttribute('id','red')
//             console.log('red')
//         }
//     }
// }

//UPNEXT DESKTOP MODE DEVELOPMENT
//griding in memebers

window.onresize = () =>{
    // console.log(window.innerWidth)
    if(window.innerWidth > 426){
        main.style.gridTemplateColumns = `repeat(${datas.length + 1},100vw)`
    }
}

//cursor
const cursor_cb = document.querySelector('#cursor_cb')
document.body.onmousemove = e =>{
    const x = e.pageX - 30
    const y = e.pageY - 30
    cursor_cb.style.left = `${x}px`
    cursor_cb.style.top = `${y}px`
}

//next page guider
const home_next_page = document.querySelector('.home_next_page_parameter')

home_next_page.onmouseover = () =>{
    const att = home_next_page.getAttribute('href')
    to_page.className = 'amh'
    to_page.textContent = 'ቀጣይ ገጽ'
}

home_next_page.onmouseleave = () =>{
    const att = home_next_page.getAttribute('href')
    to_page.className = ''
    to_page.textContent = ''
}

//CB top left to home link
const cb = document.querySelector('.cb')

cb.onmouseover = () =>{
    cb.id = 'blue'
}
cb.onmouseleave = () =>{
    cb.id = 'red'
}

//this event is for the mouse on moving on next and prev div sections
//so if there's no next or prev divs to move on then the text will be empty 
//of course i can use it inside the code where i set the mouse move events but 
//insted of writing two #mouseleave events why not one loopin through by their class name using less line of code?
const mouse_areas = document.querySelectorAll('.mouse_area')

for(let mouse_area of mouse_areas){

    mouse_area.onmouseleave = () =>{
        to_page.textContent = ''
    }
}