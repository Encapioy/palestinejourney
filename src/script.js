document.addEventListener("DOMContentLoaded", () => {

    // FLOATING SONG START //
    const songButton = document.querySelector(".song")
    const songFrame = document.querySelector(".song-frame")

    songButton.addEventListener("click", () => {
        songFrame.classList.toggle("active");
    })
    // FLOATING SONG END //

    // CHAPTER START //
    gsap.from(".chapter", {
        opacity: 0,
        scrollTrigger: {
            start: '5% center',
            end: '6% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: -280,
    }, {
        y: -308,
        scrollTrigger: {
            start: '100% center',
            end: '100% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: -252,
    }, {
        y: -280,
        scrollTrigger: {
            start: '82% center',
            end: '82% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: -224,
    }, {
        y: -252,
        scrollTrigger: {
            start: '78% center',
            end: '78% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: -196,
    }, {
        y: -224,
        scrollTrigger: {
            start: '44% center',
            end: '45% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: -168,
    }, {
        y: -196,
        scrollTrigger: {
            start: '39% center',
            end: '40% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: -140,
    }, {
        y: -168,
        scrollTrigger: {
            start: '32% center',
            end: '33% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: -112,
    }, {
        y: -140,
        scrollTrigger: {
            start: '29% center',
            end: '30% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: -84,
    }, {
        y: -112,
        scrollTrigger: {
            start: '27% center',
            end: '28% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: -56,
    }, {
        y: -84,
        scrollTrigger: {
            start: '19% center',
            end: '20% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: -28,
    }, {
        y: -56,
        scrollTrigger: {
            start: '15% center',
            end: '16% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".chapter-list", {
        y: 0,
    }, {
        y: -28,
        scrollTrigger: {
            start: '12% center',
            end: '13% center',
            scrub: 1,
        }
    })
    // CHAPTER END //

    // JUMBOTRON START //
    gsap.from(".jumbo-title", {
        opacity: 0, duration: 3
    })

    gsap.from(".jumbo-title-span", {
        opacity: 0, duration: 3, delay: 2
    })
    // JUMBOTRON END //

    // INTRO START //
    gsap.fromTo(".aircraft", {
        x: '10rem'
    },
        {
            x: '-25rem',
            scrollTrigger: {
                trigger: '.aircraft',
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: 1,
            }
        })

    gsap.to(".cloud-5-2", {
        y: -80,
        scrollTrigger: {
            trigger: '.cloud-5-2',
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: 1,
        }
    })

    gsap.to(".cloud-3-2", {
        y: -80,
        scrollTrigger: {
            trigger: '.cloud-3-2',
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: 1,
        }
    })

    gsap.to(".cloud-8", {
        y: -80,
        scrollTrigger: {
            trigger: '.cloud-8',
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: 1,
        }
    })
    // INTRO END //

    // STORY 1 START //
    gsap.from(".story-1-2", {
        y: 100, opacity: 0,
        scrollTrigger: {
            trigger: '.story-1-2',
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
        }
    })

    // function changeBg(){
    //     const images = [
    //         'url("")',
    //     ]

    //     const story1 = document.querySelector(".story-1-3-img")
    //     const bg = images[Math.floor(Math.random() * images.length)]
    //     story1.computedStyleMap.backgroundImages = bg
    // }

    // setInterval(changeBg, 100)

    // STORY 1 END //

    // STORY 2 START //
    gsap.from(".story-2-img", {
        rotate: 45,
        scrollTrigger: {
            trigger: '.story-2',
            start: 'top bottom',
            end: 'center top',
            scrub: 1,
        }
    })
    // STORY 2 END //

    // STORY 3 START //
    // const story3Imgs = document.querySelectorAll(".story-3-img")

    // document.addEventListener("mousemove", (e) => {
    //     story3Imgs.forEach((i) => {
    //         const parllaxSpeed = i.dataset.parallaxSpeed

    //         const deltaX = (e.clientX - window.innerWidth / 2) * parllaxSpeed

    //         gsap.to(story3Imgs, { x: -deltaX, duration: 0.75 });
    //     })
    // })
    // STORY 3 END //

    // STORY 4 START //
    gsap.from(".story-4-head", {
        scale: 0.6, opacity: 0,
        scrollTrigger: {
            trigger: '.story-4-head',
            start: 'center bottom',
            end: 'center center',
            scrub: 1,
        }
    })

    gsap.from(".story-4-1-line", {
        scale: 0,
        scrollTrigger: {
            trigger: '.story-4-1',
            start: 'top bottom',
            end: 'center top',
            scrub: 1,
        }
    })

    gsap.from(".story-4-1-text", {
        x: -100,
        scrollTrigger: {
            trigger: '.story-4-1',
            start: 'center bottom',
            end: 'center top',
            scrub: 1,
        }
    })

    gsap.from(".story-4-2-line", {
        scale: 0,
        scrollTrigger: {
            trigger: '.story-4-2',
            start: 'top bottom',
            end: 'center top',
            scrub: 1,
        }
    })

    gsap.to(".story-4-2-text", {
        y: 250,
        scrollTrigger: {
            trigger: '.story-4-2',
            start: 'center bottom',
            end: 'center top',
            scrub: 1,
        }
    })

    gsap.from(".story-4-3-line-1", {
        scale: 0,
        scrollTrigger: {
            trigger: '.story-4-3',
            start: 'bottom center',
            end: 'bottom top',
            scrub: 1,
        }
    })

    gsap.from(".story-4-3-line-2", {
        scale: 0,
        scrollTrigger: {
            trigger: '.story-4-3',
            start: 'top bottom',
            end: 'center top',
            scrub: 1,
        }
    })

    gsap.from(".story-4-3-text", {
        x: -150,
        scrollTrigger: {
            trigger: '.story-4-3',
            start: 'center bottom',
            end: 'center top',
            scrub: 1,
        }
    })

    gsap.from(".story-4-4-text", {
        opacity: 0,
        scrollTrigger: {
            trigger: '.story-4-4',
            start: 'center bottom',
            end: 'top top',
            scrub: 1,
        }
    })
    // STORY 4 END //

    // STORY 6 START //
    gsap.fromTo(".story-6-img-1", {
        y: 250
    },
        {
            y: -250,
            scrollTrigger: {
                trigger: '.story-6-2',
                start: 'center bottom',
                end: 'center top',
                scrub: 1,
            }
        })

    gsap.fromTo(".story-6-img-2", {
        y: 450
    },
        {
            y: -450,
            scrollTrigger: {
                trigger: '.story-6-2',
                start: 'center bottom',
                end: 'bottom center',
                scrub: 1,
            }
        })

    gsap.fromTo(".story-6-img-3", {
        y: 250
    },
        {
            y: -250,
            scrollTrigger: {
                trigger: '.story-6-2',
                start: 'center bottom',
                end: 'center top',
                scrub: 1,
            }
        })

    gsap.fromTo(".story-6-img-4", {
        y: 450
    },
        {
            y: -450,
            scrollTrigger: {
                trigger: '.story-6-2',
                start: 'center bottom',
                end: 'bottom center',
                scrub: 1,
            }
        })
    // STORY 6 END //

    // STORY 7 START //
    gsap.from(".story-7-1-let-1", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-7-1',
            start: 'top center',
            end: 'center center',
            scrub: 1,
        }
    })

    gsap.from(".story-7-1-let-2", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-7-1',
            start: '5% center',
            end: '55% center',
            scrub: 1,
        }
    })

    gsap.from(".story-7-1-let-3", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-7-1',
            start: '10% center',
            end: '60% center',
            scrub: 1,
        }
    })

    gsap.from(".story-7-1-let-4", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-7-1',
            start: '15% center',
            end: '65% center',
            scrub: 1,
        }
    })

    gsap.from(".story-7-1-let-5", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-7-1',
            start: '35% center',
            end: '85% center',
            scrub: 1,
        }
    })

    gsap.from(".story-7-1-let-6", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-7-1',
            start: '30% center',
            end: '80% center',
            scrub: 1,
        }
    })

    gsap.from(".story-7-1-let-7", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-7-1',
            start: '25% center',
            end: '75% center',
            scrub: 1,
        }
    })

    gsap.from(".story-7-1-let-8", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-7-1',
            start: '20% center',
            end: '70% center',
            scrub: 1,
        }
    })

    gsap.to(".story-7-2-block-1", {
        y: '-100%',
        scrollTrigger: {
            trigger: '.story-7-2',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
        }
    })

    gsap.to(".story-7-2-block-2", {
        x: '-100%',
        scrollTrigger: {
            trigger: '.story-7-2',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.to(".story-7-2-block-3", {
        x: '100%',
        scrollTrigger: {
            trigger: '.story-7-2',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
        }
    })

    gsap.to(".story-7-2-block-4", {
        y: '100%',
        scrollTrigger: {
            trigger: '.story-7-2',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.to(".story-7-2-block-5", {
        y: '100%',
        scrollTrigger: {
            trigger: '.story-7-2',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
        }
    })

    gsap.to(".story-7-2-block-5", {
        opacity: 0,
        scrollTrigger: {
            trigger: '.story-7-2',
            start: 'top top',
            end: 'top top',
            scrub: true,
        }
    })

    gsap.to(".story-7-2-block-6", {
        x: '100%',
        scrollTrigger: {
            trigger: '.story-7-2',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.to(".story-7-2-block-7", {
        x: '-100%',
        scrollTrigger: {
            trigger: '.story-7-2',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
        }
    })

    gsap.to(".story-7-2-block-8", {
        y: '100%',
        scrollTrigger: {
            trigger: '.story-7-2',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    // STORY 7 END //

    // STORY 8 START //
    gsap.from(".story-8-text", {
        opacity: 0, scale: 0,
        scrollTrigger: {
            trigger: '.story-8-1',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        }
    })
    // STORY 8 END //

    // STORY 10 START //
    const story10Track = document.querySelector(".story-10-track")
    const s10tWidth = story10Track.offsetWidth
    const amountToScroll = s10tWidth - window.innerWidth



    gsap.to(".story-10-track", {
        x: -amountToScroll, backgroundColor: '#007639',
        scrollTrigger: {
            trigger: ".story-10",
            start: 'top top',
            end: "+=" + amountToScroll,
            pin: true,
            scrub: true,
        }
    });
    // STORY 10 END //

    // STORY 9 START //
    gsap.to(".story-9-1", {
        color: '#cb1813',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '35% center',
            end: '35% center',
            scrub: true,
        }
    })

    gsap.to(".story-9-let-1", {
        y: '-70vh', rotateX: '160deg', rotateY: '46deg', rotateZ: '-124deg',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '90% center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.to(".story-9-let-2", {
        y: '-70vh', rotateY: '164deg', rotateZ: '-157deg',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '85% center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.to(".story-9-let-3", {
        y: '-70vh', rotateX: '33deg', rotateY: '164deg', rotateZ: '-134deg',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '80% center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.to(".story-9-let-4", {
        y: '-70vh', rotateX: '13deg', rotateY: '-164deg', rotateZ: '108deg',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '75% center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.to(".story-9-let-5", {
        y: '-70vh', rotateX: '-180deg', rotateY: '108deg', rotateZ: '-95deg',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '70% center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.to(".story-9-let-6", {
        y: '-70vh', rotateX: '-180deg', rotateY: '52deg', rotateZ: '-151deg',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '65% center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.to(".story-9-let-7", {
        y: '-70vh', rotateX: '108deg', rotateY: '-98deg', rotateZ: '-134deg',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '60% center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.to(".story-9-let-8", {
        y: '-70vh', rotateY: '118deg', rotateZ: '157deg',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '55% center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.to(".story-9-let-9", {
        y: '-70vh', rotateY: '151deg', rotateZ: '-147deg',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '50% center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.to(".story-9-let-10", {
        y: '-70vh', rotateY: '118deg', rotateZ: '180deg',
        scrollTrigger: {
            trigger: '.story-9-1',
            start: '45% center',
            end: 'bottom center',
            scrub: true,
        }
    })
    // STORY 9 END //

    // STORY 11 START //
    gsap.from(".story-11-1-text", {
        opacity: 0, repeat: 1, yoyo: true,
        scrollTrigger: {
            trigger: '.story-11-1',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.to(".story-11-1-text", {
        y: 150,
        scrollTrigger: {
            trigger: '.story-11-1',
            start: 'center center',
            end: 'bottom center',
            scrub: true,
        }
    })

    gsap.from(".story-11-let-1", {
        x: 150, opacity: 0,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '20% bottom',
            end: '25% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-let-2", {
        x: 150, opacity: 0,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '30% bottom',
            end: '35% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-let-3", {
        x: 150, opacity: 0,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '40% bottom',
            end: '45% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-let-4", {
        x: 150, opacity: 0,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '50% bottom',
            end: '55% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-let-5", {
        x: 150, opacity: 0,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '60% bottom',
            end: '65% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-let-6", {
        x: 150, opacity: 0,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '70% bottom',
            end: '75% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-let-7", {
        x: 150, opacity: 0,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '80% bottom',
            end: '85% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-let-8", {
        x: 150, opacity: 0,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '90% bottom',
            end: '95% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-img-1", {
        x: 90,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: 'top 80%',
            end: 'top center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-img-2", {
        x: -60,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1,
        }
    })

    gsap.from(".story-11-img-3", {
        rotateZ: '-50deg',
        scrollTrigger: {
            trigger: '.story-11-2',
            start: 'top bottom',
            end: '15% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".story-11-img-4", {
        x: 40, y: -57
    },
        {
            x: 65, y: 187,
            scrollTrigger: {
                trigger: '.story-11-2',
                start: '5% bottom',
                end: '15% center',
                scrub: 1,
            }
        })

    gsap.fromTo(".story-11-img-5", {
        x: 13,
    },
        {
            x: -291,
            scrollTrigger: {
                trigger: '.story-11-2',
                start: '25% bottom',
                end: '25% center',
                scrub: 1,
            }
        })

    gsap.to(".story-11-img-6", {
        y: -110,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '25% bottom',
            end: '30% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".story-11-img-7", {
        y: -413,
    },
        {
            y: -126,
            scrollTrigger: {
                trigger: '.story-11-2',
                start: '17% bottom',
                end: '32% center',
                scrub: 1,
            }
        })

    gsap.fromTo(".story-11-img-8", {
        x: -91,
    },
        {
            x: 13,
            scrollTrigger: {
                trigger: '.story-11-2',
                start: '35% bottom',
                end: '35% center',
                scrub: 1,
            }
        })

    gsap.fromTo(".story-11-img-9", {
        rotateZ: '7deg',
    },
        {
            rotateZ: '-30deg',
            scrollTrigger: {
                trigger: '.story-11-2',
                start: '18% bottom',
                end: '18% center',
                scrub: 1,
            }
        })

    gsap.from(".story-11-img-10", {
        rotateZ: '-26',
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '40% bottom',
            end: '35% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".story-11-img-11", {
        rotateZ: '40deg',
    },
        {
            rotateZ: '-30deg',
            scrollTrigger: {
                trigger: '.story-11-2',
                start: '23% bottom',
                end: '27% center',
                scrub: 1,
            }
        })

    gsap.fromTo(".story-11-img-12", {
        rotateZ: '16deg',
    },
        {
            rotateZ: '-30deg',
            scrollTrigger: {
                trigger: '.story-11-2',
                start: '21% bottom',
                end: '25% center',
                scrub: 1,
            }
        })

    gsap.from(".story-11-img-13", {
        x: 152, rotateZ: '62deg',
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '30% bottom',
            end: '25% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".story-11-img-14", {
        rotateZ: '33deg',
    },
        {
            rotateZ: '7deg',
            scrollTrigger: {
                trigger: '.story-11-2',
                start: '45% bottom',
                end: 'center center',
                scrub: 1,
            }
        })

    gsap.fromTo(".story-11-img-15", {
        rotateZ: '55deg',
    },
        {
            rotateZ: '20deg',
            scrollTrigger: {
                trigger: '.story-11-2',
                start: '50% bottom',
                end: '55% center',
                scrub: 1,
            }
        })

    gsap.from(".story-11-img-16", {
        scale: 0, rotateZ: '23deg',
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '75% bottom',
            end: '80% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-img-17", {
        rotateY: '-105deg',
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '80% bottom',
            end: '78% center',
            scrub: 1,
        }
    })

    gsap.fromTo(".story-11-img-18", {
        rotateZ: '62deg'
    },
        {
            rotateZ: '-16deg',
            scrollTrigger: {
                trigger: '.story-11-2',
                start: '85% bottom',
                end: '85% center',
                scrub: 1,
            }
        })

    gsap.from(".story-11-img-19", {
        y: 196,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '85% bottom',
            end: '75% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-img-20", {
        rotateY: '-92deg',
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '85% bottom',
            end: '85% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-img-21", {
        x: -170,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '91% bottom',
            end: '85% center',
            scrub: 1,
        }

    })

    gsap.from(".story-11-img-22", {
        y: -126,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '68% bottom',
            end: '68% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-img-23", {
        y: -126,
        scrollTrigger: {
            trigger: '.story-11-2',
            start: '78% bottom',
            end: '78% center',
            scrub: 1,
        }
    })

    gsap.from(".story-11-3-text-1", {
        y: 250,
        scrollTrigger: {
            trigger: '.story-11-3',
            start: '20% center',
            end: '40% center',
            scrub: true,
        }
    })

    gsap.fromTo(".story-11-3-text-2", {
        x: '50%',
    },
        {
            x: '-50%',
            scrollTrigger: {
                trigger: '.story-11-3',
                start: 'center center',
                end: 'bottom top',
                scrub: true,
            }
        })
    // STORY 11 END //

    // STORY 13 START //
    gsap.from(".story-13-text-1", {
        x: -100,
        scrollTrigger: {
            trigger: '.story-13-1',
            start: '30% bottom',
            end: '10% center',
            scrub: true,
        }
    })

    gsap.from(".story-13-text-2", {
        x: -100,
        scrollTrigger: {
            trigger: '.story-13-1',
            start: '35% bottom',
            end: '15% center',
            scrub: true,
        }
    })

    gsap.from(".story-13-text-3", {
        x: -100,
        scrollTrigger: {
            trigger: '.story-13-1',
            start: '40% bottom',
            end: '20% center',
            scrub: true,
        }
    })

    gsap.from(".story-13-text-4", {
        x: -100,
        scrollTrigger: {
            trigger: '.story-13-1',
            start: '45% bottom',
            end: '25% center',
            scrub: true,
        }
    })

    gsap.from(".story-13-text-5", {
        x: -100,
        scrollTrigger: {
            trigger: '.story-13-1',
            start: '50% bottom',
            end: '40% center',
            scrub: true,
        }
    })

    gsap.from(".story-13-text-6", {
        x: -100,
        scrollTrigger: {
            trigger: '.story-13-1',
            start: '55% bottom',
            end: '35% center',
            scrub: true,
        }
    })

    gsap.from(".story-13-text-7", {
        x: -100,
        scrollTrigger: {
            trigger: '.story-13-1',
            start: '60% bottom',
            end: '40% center',
            scrub: true,
        }
    })

    gsap.from(".story-13-2-text", {
        x: '70%',
        scrollTrigger: {
            trigger: '.story-13-2',
            start: 'center bottom',
            end: 'bottom center',
            scrub: true,
        }
    })
    // STORY 13 END //

    // STORY 14 START //

    gsap.to(".story-14-1", {
        opacity: 1, repeat: 1, yoyo: true,
        scrollTrigger: {
            trigger: '.story-14',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
        }
    })

    gsap.from(".story-14-text", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-14',
            start: '33% bottom',
            end: '43% bottom',
            scrub: true,
        }
    })

    // STORY 14 START //

    // STORY 15 START //

    gsap.fromTo(".story-15-1", {
        opacity: 1,
    },
        {
            opacity: 0,
            scrollTrigger: {
                trigger: '.story-15',
                start: 'bottom bottom',
                end: 'bottom bottom',
                scrub: 1,
            }
        })

    gsap.fromTo(".story-15-1", {
        opacity: 0,
    },
        {
            opacity: 1,
            scrollTrigger: {
                trigger: '.story-15',
                start: 'top bottom',
                end: 'top bottom',
                scrub: 1,
            }
        })

    gsap.from(".story-15-1", {
        opacity: 0,
    })

    // STORY 15 END //

    // STORY 16 START //

    gsap.from(".story-16-text-1", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-16',
            start: '20% bottom',
            end: '35% center',
            scrub: true,
        }
    })

    gsap.from(".story-16-text-2", {
        x: -500,
        scrollTrigger: {
            trigger: '.story-16',
            start: '60% bottom',
            end: '70% center',
            scrub: true,
        }
    })

    // STORY 16 END //

    // GALLERY START //

    let mm = gsap.matchMedia();
    mm.add({
        isDekstop: "(min-width: 501px)",
        isMobile: "(max-width: 500px)"
    }, (context) => {
        let { isMobile, isDekstop } = context.conditions;

        gsap.to(".story-1-3-img", {
            y: isMobile ? '0' : '-280',
            scrollTrigger: {
                trigger: '.story-1-3',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
            }
        })

    })

    // GALLERY END //

    // OUTRO START //

    gsap.from(".outro-text-1", {
        opacity: 0, duration: 3,
        scrollTrigger: {
            trigger: '.outro',
            start: 'top 80%'
        }
    })

    gsap.from(".outro-text-2", {
        opacity: 0, duration: 3, delay: 2,
        scrollTrigger: {
            trigger: '.outro',
            start: 'top 80%'
        }
    })

    gsap.from(".outro-text-3", {
        opacity: 0, duration: 3, delay: 4,
        scrollTrigger: {
            trigger: '.outro',
            start: 'top 80%'
        }
    })
    gsap.from(".outro-text-4", {
        opacity: 0, duration: 3, delay: 6,
        scrollTrigger: {
            trigger: '.outro',
            start: 'top 80%'
        }
    })
    gsap.from(".outro-text-5", {
        opacity: 0, duration: 3, delay: 8,
        scrollTrigger: {
            trigger: '.outro',
            start: 'top 80%'
        }
    })
    gsap.from(".outro-text-6", {
        opacity: 0, duration: 3, delay: 10,
        scrollTrigger: {
            trigger: '.outro',
            start: 'top 80%'
        }
    })
    gsap.from(".outro-text-7", {
        opacity: 0, duration: 3, delay: 12,
        scrollTrigger: {
            trigger: '.outro',
            start: 'top 80%'
        }
    })
    gsap.from(".outro-text-8", {
        opacity: 0, duration: 3, delay: 14,
        scrollTrigger: {
            trigger: '.outro',
            start: 'top 80%'
        }
    })
    // OUTRO END //

    // TRANSITION START //
    gsap.to(".trans-1", {
        backgroundColor: '#fff',
        scrollTrigger: {
            trigger: '.trans-1',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.from(".trans-2", {
        backgroundColor: '#fff0',
        scrollTrigger: {
            trigger: '.trans-2',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.to(".trans-3", {
        backgroundColor: '#c4bec8',
        scrollTrigger: {
            trigger: '.trans-3',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.to(".trans-4", {
        backgroundColor: '#fff',
        scrollTrigger: {
            trigger: '.trans-4',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.from(".trans-5", {
        backgroundColor: '#fff',
        scrollTrigger: {
            trigger: '.trans-5',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.to(".trans-6", {
        backgroundColor: '#fff',
        scrollTrigger: {
            trigger: '.trans-6',
            start: '20% top',
            end: '40% top',
            scrub: true,
        }
    })

    gsap.to(".trans-7", {
        backgroundColor: '#ebedd9',
        scrollTrigger: {
            trigger: '.trans-7',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.to(".trans-8", {
        backgroundColor: '#fff',
        scrollTrigger: {
            trigger: '.trans-8',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.to(".trans-9", {
        backgroundColor: '#0f0f0f',
        scrollTrigger: {
            trigger: '.trans-9',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })

    gsap.to(".trans-10", {
        backgroundColor: '#fff',
        scrollTrigger: {
            trigger: '.trans-10',
            start: 'top top',
            end: 'center top',
            scrub: true,
        }
    })
    // TRANSITION END //

})