

export function formatStudyYears(startYear) {
    const start = parseInt(startYear)
    const end = start + 4
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth()

    if (currentYear > end || (currentYear === end && currentMonth >= 8)) {
        return `${start}-${end} (закончил)`
    }
    
    let course = currentYear - start
    
    if (currentMonth >= 8) {
        course = currentYear - start + 1
    }
    
    course = Math.min(course, 4)
    course = Math.max(course, 1)
    
    return `${start}-${end} (${course} курс)`
}



export function calculateAge(dateString) {
    const birthDate = new Date(dateString)
    const today = new Date()

    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    const dayDiff = today.getDate() - birthDate.getDate()

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--
    }
    
    return age
}