allow_k8s_contexts('pve-talos')
k8s_namespace('test-dev')

default_registry('registry.saminthedark.fr/friterie-dev')
img_name = 'o-ptit-cornet'

local('ls -a')
api_url=str(local("source ./.env && echo $VITE_API_URL"))
nocodb_token=str(local("source ./.env && echo $VITE_API_TOKEN"))

# Construction de l'image avec les variables d'environnement
docker_build(
    img_name,
    '.',
    dockerfile='./Dockerfile',
    build_args={'VITE_API_URL': api_url, 'VITE_API_TOKEN': nocodb_token},  # Passage des variables comme arguments de build
    ignore=['node_modules', '.git']
)

# Déploiement Kubernetes
k8s_yaml(['k8s/namespace.yaml', 'k8s/deploy.yaml', 'k8s/service.yaml', 'k8s/ingress.yaml'])
k8s_resource(img_name, port_forwards='8080:80')
