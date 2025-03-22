
// 🧙 CoC7 한글 위자드 확장 스크립트
Hooks.once("init", async function () {
  if (!game.modules.get("call-of-cthulhu-foundryvtt-investigator-wizard")?.active) return;

  // 위자드 모듈에 한글 셋업을 등록
  if (!game.cocWizard) {
    console.warn("CoC Wizard 모듈이 아직 초기화되지 않았습니다.");
    return;
  }

  // 한글 셋업
  game.cocWizard.addSetupPack("korean-1920s-setup");

  // 한글 직업 및 기술 등록 (선택 사항)
  game.cocWizard.addOccupationPack("korean-occupations");
  game.cocWizard.addSkillPack("korean-skills");

  console.log("✅ 한글 Investigator Wizard 확장 적용 완료");
});
