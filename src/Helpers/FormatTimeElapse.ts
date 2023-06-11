export const formatTimeElapse = (seconds: number) =>{
    let minutes = Math.floor(seconds / 60);
    seconds -= (minutes * 60);

    let formatedSeconds = (seconds >= 10 ? seconds : `0${seconds}`);
    let formatedMinute = (minutes > 10 ? minutes : `0${minutes}`);

    return `${formatedMinute}:${formatedSeconds}`;
}