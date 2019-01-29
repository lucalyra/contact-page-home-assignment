class MoreOptions{
    constructor(){
        this.moreOptions = document.querySelector(".header-mobile-more");
        this.sidebarMore = document.querySelector(".sidebar-more-button");
        this.moreButton = document.querySelector(".more-button")
        this.moreBox = document.querySelector(".sidebar-menu");
        this.moreBackground = document.querySelector(".sidebar-screen-background")
        this.openMore()
        this.backgroundClose()
        this.sidebarMoreButton()
    }

    openMore(){
        this.moreButton.addEventListener("click",() => { if( this.moreBox.classList.contains("hide") ) {
            this.moreBox.classList.remove("hide")
        } else { this.closeMore()  }
         } )
    }
    closeMore(){
        this.moreBox.classList.add("hide")
    }
    backgroundClose(){
        this.moreBackground.addEventListener('click', () =>{ 
            if(this.moreBox.classList.contains("hide") == false){
                this.moreBox.classList.add("hide")
            }
        } )
    }
    sidebarMoreButton(){
        this.sidebarMore.addEventListener('click', () =>{ 
            if(this.moreBox.classList.contains("hide") == false){
                this.moreBox.classList.add("hide")
            }
        } )
    }

}
let moreOptions = new MoreOptions 