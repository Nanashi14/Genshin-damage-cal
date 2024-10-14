function calculateDamage() {
    // Get user inputs
    const atk = parseFloat(document.getElementById('attack').value);
    const skillMultiplier = parseFloat(document.getElementById('skill-multiplier').value) / 100;
    const critRate = parseFloat(document.getElementById('crit-rate').value) / 100;
    const critDamage = parseFloat(document.getElementById('crit-damage').value) / 100;
    const enemyResistance = parseFloat(document.getElementById('enemy-resistance').value) / 100;
    const elementalModifier = parseFloat(document.getElementById('elemental-modifier').value);

    // Calculate Crit Modifier (average crit)
    const critModifier = 1 + critRate * critDamage;

    // Calculate Resistance Modifier
    let resistanceModifier = 1;
    if (enemyResistance > 0) {
        resistanceModifier = 1 - enemyResistance;
    } else if (enemyResistance < 0) {
        resistanceModifier = 1 - (enemyResistance / 2);
    }

    // Calculate Final Damage
    const damage = atk * skillMultiplier * critModifier * resistanceModifier * elementalModifier;

    // Display the result
    document.getElementById('damage-output').innerText = damage.toFixed(2);
}
