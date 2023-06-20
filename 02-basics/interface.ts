interface User {
    readonly _id: number
    email: string,
    userId: number,
    googleId?: number,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

interface User {
    github?: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const shanid: Admin = {
    role: "admin",
    _id: 22,
    email: "some",
    userId: 2211,
    startTrial: () => "some",
    getCoupon: (name: "some", off: 22) => 39
}

export {}