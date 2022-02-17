import argparse

def parser_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('-t','--texto',type=str)
    parser.add_argument('-q','--query',type=str)
    return parser.parse_args()

def main():
    args = parser_args()
    texto = args.texto
    query = args.query

    print("O parametro passado pelo usuário foi:",texto)
    print("O parametro passado pelo usuário foi:",query)

main()