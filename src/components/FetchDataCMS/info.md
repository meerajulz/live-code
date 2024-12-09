https://prolog-api.profy.dev/content-page/home

interface Section {
title: string;
subtitle: string;
}
interface TestimonialItem {
title: string;
text: string;
userRole: string;
}

interface Testimonials extends Section {
testimonials: TestimonialItem[];
sectionType: 'testimonials';
}

function isTestimonials(section: Section): section is Testimonials {
return (section as Testimonials).sectionType === 'testimonials';
}

- **Dynamic Data Fetching**: Use a custom hook to fetch data from a provided API.
- **Hero Section**: Display the first section of the fetched data dynamically.
- **Testimonials Section**: Filter and display the testimonials from the fetched data.
- **Responsive Layout**: Ensure the dashboard is responsive and displays correctly on different devices.

### Implement Custom Hook

- [ ] Create a custom hook `useFetchData` to abstract the data fetching logic.
- [ ] Use the custom hook in the Dashboard component to fetch data from the given URL.

### Define TypeScript Interfaces

- [ ] Define TypeScript interfaces for the data structure (Section, TestimonialItem, Testimonials).
- [ ] Implement a type guard to check for the 'testimonials' section type.

### Implement Dashboard Component

- [ ] Use the fetched data to set state in the Dashboard component.
- [ ] Implement conditional rendering to handle loading and error states.

### Hero Section

- [ ] Dynamically render the title and subtitle from the first section of the fetched data.

### Testimonials Section

- [ ] Filter out the testimonials section using the custom type guard.
- [ ] Map through the testimonials and render them in the UI.

### Additional Features

- [ ] Add error handling for the fetch operation.
- [ ] Implement a loading spinner while data is being fetched.

### Styling

- [ ] Use CSS/SCSS for basic styling of the dashboard.
- [ ] Ensure the layout is responsive and test on different devices.
