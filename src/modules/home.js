function createHome() {
    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    body.appendChild(container);

    const header = document.createElement("header");
    const header_logo = document.createElement("img");
    header_logo.src = "images/double-tick.png";
    header_logo.alt = "double check icon";
    const header_h1 = document.createElement("h1");
    header_h1.textContent = "To Do";
    const header_button = document.createElement("button");
    header_button.setAttribute("id", "arrow");
    header_button.setAttribute("class", "down");
    header.append(header_logo, header_h1, header_button);

    const main = document.createElement("main");
    const nav = document.createElement("nav");
    nav.setAttribute("id", "sidebar");
    nav.setAttribute("class", "hide-sidebar");

    const tabs_wrapper = document.createElement("div");
    tabs_wrapper.setAttribute("class", "tabs-wrapper");

    const all_tab = document.createElement("div");
    all_tab.setAttribute("class", "all tab");
    const all_tabImg = document.createElement("img");
    all_tabImg.src = "images/calendar.png";
    all_tabImg.alt = "calendar icon";
    const all_tabH2 = document.createElement("h2");
    all_tabH2.textContent = "All";
    all_tab.append(all_tabImg, all_tabH2);

    const today_tab = document.createElement("div");
    today_tab.setAttribute("class", "today tab");
    const today_tabImg = document.createElement("img");
    today_tabImg.src = "images/today.png";
    today_tabImg.alt = "checked calendar icon";
    const today_tabH2 = document.createElement("h2");
    today_tabH2.textContent = "Today";
    today_tab.append(today_tabImg, today_tabH2)

    const week_tab = document.createElement("div");
    week_tab.setAttribute("class", "week tab");
    const week_tabImg = document.createElement("img");
    week_tabImg.src = "images/timeline-week.png";
    week_tabImg.alt = "calendar with a timeline icon";
    const week_tabH2 = document.createElement("h2");
    week_tabH2.textContent = "Week";
    week_tab.append(week_tabImg, week_tabH2)
    tabs_wrapper.append(all_tab, today_tab, week_tab);

    const projects = document.createElement("div");
    projects.setAttribute("class", "projects");
    const projects_header = document.createElement("div");
    projects_header.setAttribute("class", "header");
    const projects_headerH2 = document.createElement("h2");
    projects_headerH2.textContent = "Projects";
    const projects_headerBtn = document.createElement("button");
    projects_headerBtn.setAttribute("class", "tooltip");
    projects_headerBtn.setAttribute("data-title", "Add new project");
    const projects_headerImg = document.createElement("img");
    projects_headerImg.src = "images/add.png";
    projects_headerImg.alt = "add icon";
    projects_header.append(projects_headerH2, projects_headerBtn);
    projects_headerBtn.appendChild(projects_headerImg);

    const new_projects = document.createElement("div");
    new_projects.setAttribute("id", "new-projects");

    projects.append(projects_header, new_projects);
    nav.append(tabs_wrapper, projects);

    const content = document.createElement("div");
    content.setAttribute("id", "content");
    main.append(nav, content);

    const footer = document.createElement("footer");
    const footerP = document.createElement("p");
    footerP.textContent = "Copyright © 2024 ValerioL94";
    const footerA = document.createElement("a");
    footerA.href = "https://github.com/ValerioL94";
    const footerImg = document.createElement("img");
    footerA.appendChild(footerImg);
    footerImg.src = "images/github-mark.svg";
    footerImg.alt = "github logo";
    footer.append(footerP, footerA);

    container.append(header, main, footer);
}

export default createHome;