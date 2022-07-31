import { Container, TestiTitle, TestiContent } from "./styles/Testimonial";

import "./styles/swiper-styles.css";

export default function Testimonial({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Testimonial.Title = function TestimonialTitle({ children, ...props }) {
    return <TestiTitle {...props}>{children}</TestiTitle>
}

Testimonial.Content = function TestimonialContent({ children, ...props }) {
    return <TestiContent {...props}>{children}</TestiContent>
}
