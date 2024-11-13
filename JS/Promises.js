let company = new Promise((resolve, reject) => {
  if (true) {
    resolve("Harsimran got the job");
  } else {
    reject("Harsimran did not get the job");
  }
});


function placeOrder(order) {
  return new Promise((resolve, reject) => {
    if (order.items.length > 0) {
      setTimeout(() => {
        resolve(`Order #${order.id} placed successfully`);
      }, 2000); // Simulating network delay
    } else {
      reject("Error: No items in the order");
    }
  });
}

function prepareFood(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Food for order #${orderId} prepared`);
    }, 5000); // Simulating food preparation time
  });
}

function pickupFood(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Food for order #${orderId} picked up by driver`);
    }, 3000); // Simulating pickup time
  });
}

function deliverFood(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Food for order #${orderId} delivered successfully`);
    }, 4000); // Simulating delivery time
  });
}

// Using the Promises
const order = { id: 12345, items: ["Pizza", "Salad"] };

placeOrder(order)
  .then((message) => {
    console.log(message);
    return prepareFood(order.id);
  })
  .then((message) => {
    console.log(message);
    return pickupFood(order.id);
  })
  .then((message) => {
    console.log(message);
    return deliverFood(order.id);
  })
  .then((message) => {
    console.log(message);
    console.log("Order process completed!");
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Order process completed!");
  });

// write js code to replace then with async await

async function init() {
  try {
    const orderPlaced = placeOrder(order);
    const foodPrepared = prepareFood(order.id);
    const foodPickedUp = pickupFood(order.id);
    const foodDelivered = deliverFood(order.id);

    const results = await Promise.all([
      orderPlaced,
      foodPrepared,
      foodPickedUp,
      foodDelivered,
    ]);

    results.forEach((result) => console.log(result));
    console.log("Order process completed!");
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Order process completed!");
  }
}

init();