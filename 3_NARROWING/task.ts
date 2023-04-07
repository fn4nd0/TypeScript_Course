function userReview(userRate: number | boolean) {
    if (typeof userRate === 'boolean') {
        console.log("Your review is important to us. Please be honest and review it later")
    } else {
        console.log(`You gave the rate ${userRate}! Thank you for your review!`)
    }
}

userReview(false)
userReview(3)
userReview(5)