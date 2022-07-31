import { Container, Image, Shape, Button} from "./styles/AnimateShape";

export default function AnimateShape({children, ...props}) {
    return <Container {...props}>{children}</Container>
}

AnimateShape.Shape = function AnimateShapeShape({...props}) {
    return(
                <Shape {...props}
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 10, opacity: 1 }}
                    transition={{ 
                        duration: 2,
                        repeat: "Infinity",
                        repeatType: "reverse", 
                        repeatDelay: 1 }}
                />
    );
}

AnimateShape.Image = function AnimateShapeImage({...props}) {
    return(
        <Image {...props}
            initial={{ x: 0, opacity: .5 }}
            animate={{ x: 10, opacity: 1 }}
            transition={{ 
                duration: 2 }}
            />
    );
}

AnimateShape.Button = function AnimateShapeButton({children, ...props}) {
    return(
        <Button {...props}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 5, opacity: 1 }}
            transition={{ 
                duration: 2,
                repeat: "Infinity",
                repeatType: "reverse", 
                repeatDelay: 1 }}
        >{children}</Button>
    );
}