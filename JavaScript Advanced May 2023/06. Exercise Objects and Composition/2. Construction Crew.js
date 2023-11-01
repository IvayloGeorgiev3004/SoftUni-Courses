function worker(object) {
    if (object.dizziness === false) {
        console.log(object);
    } else {
        object.levelOfHydrated += object.weight * 0.1 * object.experience;
        object.dizziness = false;
    }
    return object;
}
worker({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
worker({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });
