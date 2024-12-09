# Challenge Description: Interactive Product Management App

## Objective

Develop a dynamic and responsive web application using React that allows users to manage a list of products. The application should include functionalities for searching, selecting, and deleting products from the list. Each product will have details such as title, description, and price that should be interactively managed through the app interface.

## Requirements

### Product Data Handling:

- Initialize the application state with product data loaded from a JSON file.
- Define a TypeScript interface `Product` that includes `id`, `title`, `description`, `price`, `image`, and an optional `selected` boolean flag.

### Search Functionality:

- Implement a search input that filters products by their titles. The filtering should be case-insensitive.
- The search results update the view in real-time as the user types.

### Product Selection:

- Add checkboxes next to each product allowing the user to select or deselect products.
- Highlight selected products by changing their background color.

### Delete Functionality:

- Include a delete button for each product.
- Remove a product from the list when its delete button is clicked.

### Responsive UI Design:

- Design the product list to alternate row colors for better readability, with an additional highlight color for selected products.
- Ensure the UI is responsive and functional across different device sizes.

### State Management:

- Use React state hooks (`useState`) effectively to manage the products and search terms.
- Ensure the application handles state updates efficiently, providing a smooth and responsive user experience.

## Advanced Challenges (Optional)

- Implement pagination or infinite scrolling to handle a large number of products.
- Add the ability to edit product details directly from the list.
- Integrate with a backend API to fetch and update product data dynamically.

## Development Tools

- **React** (with Hooks)
- **TypeScript** for static type checking
- **CSS** for styling

## Deliverables

- Source code repository with complete React application.
- Documentation on how to set up and run the application.
- A brief guide on using the application, including how to perform search, selection, and deletion operations.

## User Stories

- As a user, I want to see all available products when I open the application, so I can manage them.
- As a user, I want to search for products by title so that I can find specific items quickly.
- As a user, I want to select multiple products using checkboxes to perform batch actions such as delete.
- As a user, I want to delete products from the list to keep the list updated with only relevant items.

This challenge will test your abilities in React state management, component structuring, and handling user interactions, making it a comprehensive exercise for developing dynamic web applications with real-world utility.
