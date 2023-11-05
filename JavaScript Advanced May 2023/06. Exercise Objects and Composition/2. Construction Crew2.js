function createCrew(object) {
  if (object.dizziness === true) {
    let intake = object.weight * 0.1 * object.experience;
    object.levelOfHydrated = intake;
    object.dizziness = false;
  }

  return object;
}
createCrew({weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true});
