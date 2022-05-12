setTimeout(()=>{
    document.body.style.backgroundcolor = 'red';
    setTimeout(()=>{
        document.body.style.backgroundcolo ='pink';
        setTimeout(()=>{
            document.body.style.backgroundcolor ='blue';
        }, 1000)
    }, 1000)
},1000)