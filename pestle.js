const uniquePestleOptions = [...new Set(currdata.map((d) => d.pestle).filter((pestle) => pestle !== ""))];
console.log(uniquePestleOptions);
