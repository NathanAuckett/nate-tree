console.log("Populating links...");
const linkListSocials = document.getElementById("linkList_socials");
const linkListGames = document.getElementById("linkList_games");

const LINK_TYPE = {
    SOCIAL: "SOCIAL",
    GAME: "GAME"
}

function AddLink(title = "Link", image = "", url = "", type = LINK_TYPE.SOCIAL, enabled = true){
    console.log(`Adding ${title}`);
    let linkTemplate;
    let newLink;
    let hrefElement;

    switch (type){
        case LINK_TYPE.SOCIAL:
            linkTemplate = document.getElementById("linkTemplate");
            newLink = linkTemplate.content.cloneNode(true);
            hrefElement = newLink.getElementById("link");
            hrefElement.href = url;
            newLink.getElementById("title").innerHTML = title;
            newLink.getElementById("image").src = image;
            linkListSocials.appendChild(newLink);
            break;
        case LINK_TYPE.GAME:
            linkTemplate = document.getElementById("linkTemplateGame");
            newLink = linkTemplate.content.cloneNode(true);
            hrefElement = newLink.getElementById("link");
            hrefElement.href = url;
            newLink.getElementById("title").innerHTML = title;
            newLink.getElementById("container").style.backgroundImage = `url('${image}')`;
            linkListGames.appendChild(newLink);
            break;
    }

    if (!enabled){
        hrefElement.classList.add("disabled");
    }
}

//Socials
AddLink(
    "BlueSky",
    "./src/graphics/Bluesky_Logo.svg",
    "https://bsky.app/profile/nathanauckett.bsky.social",
    LINK_TYPE.SOCIAL
);
AddLink(
    "Github",
    "./src/graphics/github-mark.svg",
    "https://github.com/NathanAuckett",
    LINK_TYPE.SOCIAL
);
AddLink(
    "YouTube",
    "./src/graphics/youtube-play-sm.png",
    "https://www.youtube.com/@NathanAuckett",
    LINK_TYPE.SOCIAL
);
AddLink(
    "X / Twitter",
    "./src/graphics/x-logo.svg",
    "https://x.com/NathanAuckett",
    LINK_TYPE.SOCIAL
);

//Games
AddLink(
    "Speck &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; info to come...",
    "./src/graphics/speck.jpg",
    "",
    LINK_TYPE.GAME,
    false
);
AddLink(
    "Eldritchvania",
    "./src/graphics/eldritchvania.jpg",
    "https://store.steampowered.com/app/2423710/Eldritchvania/",
    LINK_TYPE.GAME
);
AddLink(
    "The Cardinal Crusade",
    "./src/graphics/the-cardinal-crusade.jpg",
    "https://gamejolt.com/games/thecardinalcrusade/171762",
    LINK_TYPE.GAME
);