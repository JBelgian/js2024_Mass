// Fetch users and demonstrate array methods
async function fetchRandomUsers() {
    try {
      // Fetch users from Random User API
      const response = await fetch('https://randomuser.me/api/?results=10');
      const { results } = await response.json();
  
      // Map: Extract full names
      const fullNames = results.map(({ name: { first, last } }) => `${first} ${last}`);
      console.log('Full Names:', fullNames);
  
      // Filter: Get users over 25
      const olderUsers = results.filter(({ dob: { age } }) => age > 25);
      console.log('Users over 25:', olderUsers.length);
  
      // Reduce: Calculate average age
      const averageAge = results.reduce((sum, { dob: { age } }) => sum + age, 0) / results.length;
      console.log('Average Age:', averageAge.toFixed(2));
  
      // Find: Locate first user from the US
      const americanUser = results.find(({ nat }) => nat === 'US');
      console.log('First US User:', americanUser?.name);
  
      // Some: Check if any users are from Australia
      const hasAustralianUser = results.some(({ nat }) => nat === 'AU');
      console.log('Has Australian User:', hasAustralianUser);
  
      return results;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  
  // Execute the function
  // fetchRandomUsers();

  // Let's make use of the return value
  const result = fetchRandomUsers();
  console.log(result); // promise pending 


async function main() {
     try {
         const results = await fetchRandomUsers();
         console.log('Full Names:', results.map(({ name: { first, last } }) => `${first} ${last}`));
        
     } catch (error) {
         console.error('Error fetching users:', error);
     }
 }

main();
