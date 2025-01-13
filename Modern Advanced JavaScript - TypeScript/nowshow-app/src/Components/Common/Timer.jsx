import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Timer({ seconds, timeIsUp, displayHTML }) {
    // initialize timeLeft with the seconds prop
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) {
            timeIsUp();
            return;
        }

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);

    if (displayHTML) {
        return (
            <>
                <Heading>{timeLeft} Seconds left</Heading>
            </>
        );
    } else {
        return;
    }

};
