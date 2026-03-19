/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (billAmount <= 0 || checkInteger(serviceRating)) {
    return null;
  }

  switch (serviceRating) {
    case 1:
      return getFinalBill(5, billAmount);
    case 2:
      return getFinalBill(10, billAmount);
    case 3:
      return getFinalBill(15, billAmount);
    case 4:
      return getFinalBill(20, billAmount);
    case 5:
      return getFinalBill(25, billAmount);
  }
}

function getFinalBill(tipPercentage, billAmount) {
  let tipAmount = (billAmount * tipPercentage) / 100;
  let totalAmount = billAmount + tipAmount;
  return {
    tipPercentage: tipPercentage,
    tipAmount: tipAmount,
    totalAmount: totalAmount,
  };
}

function checkInteger(serviceRating) {
  if (typeof serviceRating !== "number") {
    return true;
  }

  if (
    !(
      serviceRating === 1 ||
      serviceRating === 2 ||
      serviceRating === 3 ||
      serviceRating === 4 ||
      serviceRating === 5
    )
  ) {
    return true;
  }
}
