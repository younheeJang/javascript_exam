const pagination = (D, F, L, S) => {
        let res = [];
        PS = 5;
        if (F == L) {
            res.push(L);
            return res;
        }

        let K = F + PS;
        if (F < 7 && F % 10 >= 7) { K == L - 1; } else { K = K - 1; }
        for (let i = F; i <= K; i++) { res.push(i); }

        return res;
    }
    //D:데이터 리스트의 렝스, F:사용자가 지정한 페이지 넘버 디폴트 1
    //L:마지막 페이지 넘버 , S:한 페이지 당 보여줄 리스트의 개수,
    //PS:사용자에게 보여줄 페이지의 수


/*
    const pagination = (D, F, L, S) => {
        let res = [];
        PS = 5;
        if (F == L) {
            res.push(L);
            return res;
        }

        let K = F + PS;
        log('K: ' + K);
        log('F%10: ' + F % 10);
        if (F < 10 && F % 10 >= 7) { K == L - 1; } else { K = K - 1; }
        log('Kk: ' + K);
        log('Ff%10: ' + F % 10);
        for (let i = F; i <= K; i++) { res.push(i); }

        return res;
    }

*/





const pagination_5 = (D, F, L, S) => {
    let res = [];
    let K, PS = 5;
    if (F == L) {
        res.push(L);
        return res;
    }
    K = F + PS;
    if (F < 7 && F % 10 >= 7) {
        K = L;
    } else {
        K = K - 1;
    }
    if (L > K || F < K) {
        for (let i = F; i < L; i++) {
            if (res.length < PS) { res.push(i); } else { return res; }
        }
    } else {
        for (let i = F; i < K; i++) {
            res.push(i);
        }
    }
    return res;
}