function skillsMember() {
    var skill = document.getElementById("skills");
    var skillValue = skill.options[skill.selectedIndex].value;
    var skillText = skill.options[skill.selectedIndex].text;
    var skillArray = [];
    skillArray.push(skillValue);
    skillArray.push(skillText);
    return skillArray;
}