console.log("Populating links...");
const linkListParent = document.currentScript.parentElement;

function AddLink(title = "Link", image = "", url = ""){
    console.log(`Adding ${title}`);
    const linkTemplate = document.getElementById("linkTemplate");
    const newLink = linkTemplate.content.cloneNode(true);

    newLink.getElementById("link").href = url;
    newLink.getElementById("title").innerHTML = title;
    newLink.getElementById("image").src = image;

    linkListParent.appendChild(newLink);
}

AddLink(
    "Blue Sky",
    "./src/graphics/Bluesky_Logo.svg",
    "https://bsky.app/profile/nathanauckett.bsky.social"
);
AddLink(
    "Github",
    "./src/graphics/github-mark.svg",
    "https://github.com/NathanAuckett"
);
AddLink(
    "Eldritchvania",
    "./src/graphics/eldritchvania.jpg",
    "https://store.steampowered.com/app/2423710/Eldritchvania/"
);