import type { IAnimationProps } from "@/types";
import { motion } from "framer-motion";
import React, { FC } from "react";

const _Animation: FC<IAnimationProps> = props => {
    const { children, delay = 0.3, classN = "" } = props;

    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: delay,
                y: { type: "spring", stiffness: 100 },
                default: { duration: 0.8 },
            }}
            style={{ transition: "all 0.5 ease", width: "100%" }}
            className={classN}
        >
            {children}
        </motion.div>
    );
};

export const Animation = React.memo(_Animation);
